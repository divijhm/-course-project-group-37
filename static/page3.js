// function addGridItem(imageUrl) {
//     const gridContainer = document.getElementById('box5');
//     const gridItem = document.createElement('div');
//     gridItem.classList.add('grid-item');
//     gridItem.innerHTML = `
//         <img src="${imageUrl}" alt="an image">
//         <div class="checkbox-wrapper-19">
//             <input type="checkbox" id="cbtest-${gridContainer.children.length + 1}" name="selectedImages">
//             <label for="cbtest-${gridContainer.children.length + 1}" class="check-box"></label>
//         </div>
//     `;
//     gridContainer.appendChild(gridItem);
// }

// document.getElementById('search_query').addEventListener('input', function() {
//     imageContainer = document.getElementById('grid-container');
//         imageContainer.innerHTML = '';
//         data.forEach(image => {
//             let imgElement = document.createElement('img');
//             imgElement.src = image.src;
//             imgElement.alt = image.alt;
//             let pElement = document.createElement('p');
//             pElement.textContent = image.alt;
//             let imageItem = document.createElement('div');
//             imageItem.classList.add('grid-item');
//             imageItem.appendChild(imgElement);
//             imageItem.appendChild(pElement); // Append the paragraph element
//             imageContainer.appendChild(imageItem);
//         });
//     })
//     .catch(error => console.error('Error:', error));
// });


document.getElementById('search_query').addEventListener('input', function() {
    let searchQuery = this.value.trim().toLowerCase(); // Trim and convert search query to lowercase
    const gridContainer = document.getElementById('box5');
    gridContainer.innerHTML = ''; // Clear existing grid items
    
    // If search query is empty, display all images
    if (searchQuery === '') {
        data.forEach(image => addGridItem(image.src, image.alt));
    } else {
        // Filter images based on search query
        data.forEach(image => { 
            if (image.alt.toLowerCase().includes(searchQuery)) {
                addGridItem(image.src, image.alt);
            }
        });
    }
});

function addGridItem(imageUrl, altText) {
    const gridContainer = document.getElementById('box5');
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.innerHTML = `
        <img src="${imageUrl}" alt="${altText}">
        <div class="checkbox-wrapper-19">
            <input type="checkbox" id="cbtest-${gridContainer.children.length + 1}" name="selectedImages">
            <label for="cbtest-${gridContainer.children.length + 1}" class="check-box"></label>
        </div>
    `;
    gridContainer.appendChild(gridItem);
}


document.querySelectorAll('.checkbox-overlay').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        
        const imageId = this.parentElement.dataset.imageId;
        const isChecked = this.checked;
      
        fetch('/update_image_selection', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ imageId, isChecked })
        })
        .then(response => {
            
       
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});


var video = document.getElementById("myVideo");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

video.addEventListener("loadedmetadata", function() {
    var scaleFactor = Math.min(canvas.width / video.videoWidth, canvas.height / video.videoHeight);

    var scaledWidth = video.videoWidth * scaleFactor;
    var scaledHeight = video.videoHeight * scaleFactor;

    function drawFrame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(video, 0, 0, scaledWidth, scaledHeight);
        
        requestAnimationFrame(drawFrame);
    }

    drawFrame();
});


function button1Clicked() {
        alert("Button 1 Clicked!");
    }
    function button2Clicked() {
        alert("Button 2 Clicked!");
    }
    function button3Clicked() {
        alert("Button 3 Clicked!");
    }
// Get the video element
