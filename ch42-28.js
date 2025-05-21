// 1
 function showAlert() {
        alert("You clicked the link!");
    }
// 2
 function showAlert(mobileName) {
        alert("Ahh! Nice Choice...You clicked on " + mobileName);
    }
// 3
function updateIndexes() {
    const rows = document.querySelectorAll("#studentTable tbody tr");
    rows.forEach((row, index) => {
      row.cells[0].innerText = index;
    });
  }
  function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateIndexes();
  }
  updateIndexes();
// 4
 const image = document.getElementById('myImage');
    function changeImage() {
      image.src = 'images/mob1.avif';
    }
    function resetImage() {
      image.src = 'images/mob.avif';
    }
    image.addEventListener('mouseover', changeImage);
    image.addEventListener('mouseout', resetImage);