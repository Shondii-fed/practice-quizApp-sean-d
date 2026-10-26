const questionData = [
    {
        question: "What is a core characteristic of a dynamic web page compared to a static web page?",
        choices: [
            "It loads faster because it uses no CSS",
            "It generates content on-the-fly using data and user interactions, allowing different users to see different content",
            "It requires the user to manually refresh the browser to see updates",
            "It is stored on the server as a fixed, unchanged HTML file"
        ],
        answer: "It generates content on-the-fly using data and user interactions, allowing different users to see different content"
    },
    {
        question: "How does the Document Object Model (DOM) act as a bridge between HTML and JavaScript?",
        choices: [
            "It translates the HTML into a tree of objects that JavaScript can use as an interface to read, modify, or delete elements",
            "It automatically injects missing CSS stylesheets into the header",
            "It converts JavaScript code directly into binary files",
            "It stores user session data in a local database"
        ],
        answer: "It translates the HTML into a tree of objects that JavaScript can use as an interface to read, modify, or delete elements"
    },
    {
        question: "Why should you use `.value` instead of `.innerHTML` when reading text from a text `<input>` field?",
        choices: [
            "Inputs are self-closing elements with no inner HTML content; user input is stored as a stateful property",
            "`.innerHTML` only works on numbers, not text strings",
            "`.innerHTML` deletes the input element entirely when accessed",
            "Inputs automatically parse typed text as HTML tags"
        ],
        answer: "Inputs are self-closing elements with no inner HTML content; user input is stored as a stateful property"
    },
    {
        question: "What risk does attaching a new event listener inside an existing listener on the exact same button create?",
        choices: [
            "It instantly deletes the button from the DOM",
            "It causes an immediate syntax error that stops the script from running",
            "It stacks multiple listeners on top of each other, causing redundant functions to fire on every click",
            "It forces the browser window to close"
        ],
        answer: "It stacks multiple listeners on top of each other, causing redundant functions to fire on every click"
    },
    {
        question: "What is a key advantage of using `rem` units instead of `em` units for layout-level margins and padding?",
        choices: [
            "`rem` units are always relative to the root font size, preventing the compounding math errors that happen with nested `em` elements",
            "`rem` stands for responsive pixels and changes automatically based on screen width",
            "`em` units are completely obsolete in modern browsers",
            "`rem` forces text to stay locked at a fixed pixel size for accessibility compliance"
        ],
        answer: "`rem` units are always relative to the root font size, preventing the compounding math errors that happen with nested `em` elements"
    }
]

export default questionData;