const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com.tr/search?q=" + input + "&source=hp&ei=1N_wYpO9MdOIxc8Pq9ugmAs&iflsig=AJiK0e8AAAAAYvDt5NPMKHAGjyMlDsvrIaFSCs92ufvz&ved=0ahUKEwiT95Ob_7b5AhVTRPEDHastCLMQ4dUDCAc&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEELEDEIMBMgsIABCABBCxAxCDATILCC4QgAQQsQMQ1AIyCwguEIAEELEDEIMBMgsIABCABBCxAxCDATIICAAQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIOCC4QgAQQsQMQgwEQ1AIyBQgAEIAEOhEILhCABBCxAxCDARDHARCvAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOggILhCxAxCDAToICC4QgAQQ1AJQzwVY9wpg8wxoAXAAeACAAbYBiAHhBZIBAzAuNZgBAKABAbABAA&sclient=gws-wiz"
}