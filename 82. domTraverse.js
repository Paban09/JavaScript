//Document Object
const rootNode=document.getRootNode();
console.log(rootNode);

//ChildNodes method used for view the child nodes of rootNode
console.log(rootNode.childNodes);

console.log("Html object");
//As it is a array object
const htmlElementNodes=rootNode.childNodes[0];
console.log(htmlElementNodes);
console.dir(htmlElementNodes); //object representation

console.log("Html childs");
//Html childs
console.log(htmlElementNodes.childNodes);

//html onlyChilds
console.log(htmlElementNodes.children);



console.log("Accessing HTML childs");
// accessing html childs
const headElementNodes=htmlElementNodes.childNodes[0];
console.log(headElementNodes);

const textNode1=headElementNodes.childNodes[1];
console.log(textNode1);

const bodyElements=headElementNodes.childNodes[2];
console.log(bodyElements);

//Parent relationship
console.log(headElementNodes.parentElement);

console.log("1st next sibling");
//Sibling Relationship
console.log(textNode1.nextSibling);
console.log(textNode1.nextSibling.textContent);

console.log("2nd next sibling");
console.log(textNode1.nextSibling.nextSibling);


console.log(headElementNodes.childNodes);