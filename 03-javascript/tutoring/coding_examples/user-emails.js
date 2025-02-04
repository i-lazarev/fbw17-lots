let serverData = {
  "page": 2,
  "per_page": 3,
  "total": 12,
  "total_pages": 4,
  "data": [
      {
          "id": 4,
          "email": "eve.holt@reqres.in",
          "first_name": "Eve",
          "last_name": "Holt",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      },
      {
          "id": 5,
          "email": "charles.morris@reqres.in",
          "first_name": "Charles",
          "last_name": "Morris",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      },
      {
          "id": 6,
          "email": "tracey.ramos@reqres.in",
          "first_name": "Tracey",
          "last_name": "Ramos",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
      }
  ]
};

let users = serverData.data;

// print out the emails of every single user in our array
for(let i=0; i<users.length; i++) {
  console.log( users[i].email );
}
