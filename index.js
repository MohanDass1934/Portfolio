$(document).ready(function() {
  // Counter to keep track of pill IDs
  var pillCount = 1;

  // Function to add a new pill
  function addNewPill() {
    var newPillID = 'pill-' + pillCount;
    var newTabContentID = 'tab-' + pillCount;

    // Add the pill
    $('#pills-tab').append(`
      <li class="nav-item">
        <a class="nav-link" href="#${newTabContentID}" id="${newPillID}" data-toggle="pill">Pill ${pillCount}</a>
      </li>
    `);

    // Add the tab content
    $('#pills-tabContent').append(`
      <div class="tab-pane fade" id="${newTabContentID}">
        Content for Pill ${pillCount}
      </div>
    `);

    // Increment the pill count
    pillCount++;
  }

  // Add a new pill when the "Add Pill" link is clicked
  $('#add-pill-btn').on('click', function(e) {
    e.preventDefault(); // Prevent the default behavior of anchor tag
    addNewPill();
  });

  // Add an initial pill
  addNewPill();
});