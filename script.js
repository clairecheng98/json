let contentGridElement = document.getElementById('contentGrid');

let myJSON =[
  {
    "title" : "I Could Pee on This",
    "picture_url" : "http://i.ytimg.com/vi/5VBriRtl_aM/maxresdefault.jpg",
    "lines" : ["Her new sweather doesn't smell of me", "I could pee on that", "She's gone out for the day and","  left her laptop on the counter","I could pee on that","Her new boyfriend just pushed"," my head away","I could pee on him","She's ignoring me ignoring her","I could pee everywhere","She's making up for it"," by putting me on her lap","I could pee on this","I could pee on this"]
  },
  {
    "title" : "Closed Door",
    "picture_url" : "https://specials-images.forbesimg.com/imageserve/5de6f2d8c283810006a3947f/960x0.jpg?fit=scale",
    "lines" : ["LET ME IN LET ME IN LET ME IN", "LET ME IN LET ME IN LET ME IN", "LET ME IN LET ME IN LET ME IN","LET ME IN LET ME IN LET ME IN","LET ME IN LET ME I--","Oh, uh, hello"," I did not expect an answer","I did not expect an entrance","I did not expect this room to be"," so unbelievably dull","So, uh, goodbye"]
  },
]

// loop through elements
for (var i = 0; i < myJSON.length; i++) {
  createJSON(myJSON[i]);
}

function createJSON(incomingJSON) {
  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("h4");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerHTML = incomingJSON['title'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  /// Create & add poem LIST to the item
  let newContentPoem = document.createElement("ul");
  newContentElement.appendChild(newContentPoem);

  /// Create & add the array of lines in the poem
  for (var i = 0; i < incomingJSON['lines'].length; i++) {
    var currentline= incomingJSON['lines'][i];
    var newLine = document.createElement("P");
    newLine.innerHTML = currentline;
    newContentPoem.appendChild(newLine);
  }

  /// Create & add footer image
  let newImageContainer = document.createElement("DIV");
  newImageContainer.classList.add("ImageContainer");
  let newImage = document.createElement("IMG");
  newImage.src = incomingJSON['picture_url'];
  newImageContainer.appendChild(newImage);
  newContentElement.appendChild(newImageContainer);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);
}
