const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
	insert.innerHTML = `
        <div class="key">
            ${event.key === " " ? "Space" : event.key}
            <!--${event.key === " " ? "Space" : event.code} -->
            <small>event.key</small>
        </div>

        
    `;
});
