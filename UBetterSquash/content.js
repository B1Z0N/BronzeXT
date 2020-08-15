const randSquashMsg = () => {
    const msgs = [
        "Don't forget to squash, honey",
        "U better squash",
        "А засквошить?",
        "You didn't squashed, do you?",
        "Squash or not to squash? That's the question",
        "Squash please",
        "Love you, for squashing me",
        "It tastes better if it's squashed"
    ];

    return msgs[Math.trunc(Math.random() * msgs.length)];
};

document.getElementsByClassName("merge-button")[0].addEventListener(
    "click", (event) => !confirm(randSquashMsg()) || event.stopPropagation()
);
