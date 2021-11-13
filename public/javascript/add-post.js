let imgUrl;

document.querySelector(".upload_widget_opener").addEventListener("click", function() {
    myUploadWidget = cloudinary.openUploadWidget({cloudName: "drjgfdbdc", uploadPreset: "pl94uxvo" }, (error, result) => { 
        if (result.event === 'success') {
            let img = document.createElement("img");
            img.src = result.info.url;
            imgUrl = result.info.url;
        }
        
    });
})

async function newFormHandler(event) {
    event.preventDefault();
    console.log(imgUrl);

    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            imgUrl
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);