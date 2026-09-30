function createComic() {
    let story = document.getElementById("story").value;

    if (story.trim() === "") {
        document.getElementById("result").innerText =
            "Please enter a story idea.";
        return;
    }

    document.getElementById("result").innerHTML =
        "<strong>Comic Story Created!</strong><br><br>" +
        "Your idea: " + story +
        "<br><br>Panel 1: Beginning<br>" +
        "Panel 2: Main Event<br>" +
        "Panel 3: Ending";
}
