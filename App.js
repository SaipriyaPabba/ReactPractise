const heading= React.createElement("h1", {id:"heading"}, "hello world from react");
console.log(heading); //object
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //converting h1 tag and putting it in dom