let contentGridElement = document.getElementById('contentGrid');

let myJSON =[
  {
    "username" : "cc",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    "location" : "Brooklyn NY",
    "tags liked" : ["cats","photography"]
  },
  {
    "username" : "random",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    "location" : "Boston MA",
    "tags liked" : ["food","sports"]
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

  /// Create & add image
  let newImageContainer = document.createElement("DIV");
  newImageContainer.classList.add("ImageContainer");
  let newImage = document.createElement("IMG");
  newImage.src = incomingJSON['picture_url'];
  newImageContainer.appendChild(newImage);
  newContentElement.appendChild(newImageContainer);



  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("h4");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerHTML = incomingJSON['username']+" , "+incomingJSON["location"];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  let intro=document.createElement("p");
  intro.innerHTML = "Tags used most often: ";
  newContentElement.appendChild(intro);


  /// Create & add tags LIST to the item
  let newContentTags = document.createElement("ul");
  newContentElement.appendChild(newContentTags);

  /// Create & add the array of tags
  for (var i = 0; i < incomingJSON['tags liked'].length; i++) {
    var currenttag= incomingJSON['tags liked'][i];
    var newtag = document.createElement("P");
    newtag.innerHTML = currenttag;
    newContentTags.appendChild(newtag);
  }


  let newContentButton = document.createElement("button");
  newContentButton.innerHTML = "Add friend";
  newContentButton.classList.add('buttons');
  newContentElement.appendChild(newContentButton);


  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);
}
