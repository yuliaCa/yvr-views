# yvr-views

The application is about best viewpoints in and around Vancouver. Users can see the existing list of the viewpoints added by the author and add their own viewpoints.
You can add favorite viewpoints to the Favorites section.

## Features

- Using the React Router to navigate among the components.
- All Viewpoints - this page renders the existing information from MongoDB through axios request. While the data is being fetched, the browser indicates Loading state.
- Add New - has the form with basic mongoose validation. Upon submitting the form the array of viewpoints updates and user gets redirected to the All Viewpoints page to see the full list of viewpoints, including the newly added viewpoint.
- Favourites - has a label with the number of items in the Favourites list. Implemented with React Context.

* As you click on the button Add to Favourites, the item gets pushed into favorites collection.
* As we click to remove the item from favourites, it will remove the item from the favorites collection.
* Add/Remove Favourites button is the same component. The action it will trigger depends on the state.

## How to Install

- Pull the repo to your local machine - use main branch.
- run npm install
- in one terminal run the command "npm run dev"
- open another terminal and run the command "npm run watch"

## How to Use

- When landing on the All Viewpoints page - you can review all the viewpoints' information.
- Decide if any of the viewpoints you like better - add them to Favorites
- Favorites label should indicate the udpate number of favorites, including the item you have added
- Go to Favorites page to review the Favourite viewpoints.
- You can remove any viewpoints from Favourites, if you are no longer interested in them.
- Go to Add New page and you can add your own viewpoint by filling out the form.
- Once you have filled out the form - you will see the newly added veipoint in the All Viewpoints page (provided that the information entered is valid).

## API Documentation

### Endpoints

_All data is in JSON format_

- GET /api/v1/allViewpoints - that returns the array of viepoint objects from mongodb
- POST /api/v1/newViewpoint - creates an object into viewpoints collection
- POST /api/v1/favorites - adds viewpoint into favorites collection
- GET /api/v1/favorites - pulls the array of all viewpoints in the favorites collection
- DELETE /api/v1/favorites - removes the object from the favorites collection

### Examples

#### GET /api/v1/favorites

```
[
    {
        "_id": "61a6b9bad111536724c189dc",
        "name": "Lindeman Lake",
        "address": "British Columbia V0X 1X0",
        "url": [
            "https://images.unsplash.com/photo-1594614703701-30900005eb7b?auto=format&fit=crop&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1470"
        ],
        "description": "Short, but quite steep hike leads you to this beautiful lake in Chilliwack. The combination of pristine water and forest is absolutely gorgeous.",
        "__v": 0
    },
    {
        "_id": "61a6ba28d111536724c189e2",
        "name": "Lynn Canyon Park",
        "address": "3690 Park Road, North Vancouver",
        "url": [
            "https://images.unsplash.com/photo-1595222900619-a3bdd6c17cb7?auto=format&fit=crop&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1632"
        ],
        "description": "Lynn Canyon Park is a perfect spot for a hot day. As you go down into the canyon, you are surrounded by beautiful forest and waterfalls. ",
        "__v": 0
    }
]
```

#### POST /api/v1/newViewpoint

```
{
    "data": {
        "name": "Cypress Lookout",
        "address": "20 Cypress Drive",
        "url": [
            "https://images.unsplash.com/photo-1501803730189-0e9a03cfbb30?auto=format&fit=crop&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGN5cHJlc3MlMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&q=60&w=700"
        ],
        "description": "Beatufil panoramic view of the bay. You have ocean and mountains. But you need to hike up to see it.",
        "_id": "61a9681c29e9c5e0f04e2550",
        "__v": 0
    },
    "url": "/allViewpoints/61a9681c29e9c5e0f04e2550"
}
```

## Attributions

### Images

_Images taken from https://unsplash.com_

##### Credits To:

- [Spencer Watson](https://unsplash.com/@thebrownspy)
- [Lesley Derksen](https://unsplash.com/@lderksen)
- [peter P](https://unsplash.com/@yongjinp)
- [Mohammad Rezaie](https://unsplash.com/@heinrich_boll)
- [Ben Waardenburg](https://unsplash.com/@benwubbleyou)
- [Rohit D'Silva](https://unsplash.com/@rohitdsilva)
- [Roshan Raj](https://unsplash.com/@roshanrajx64)
- [Pete Nuij](https://unsplash.com/@pete_nuij)
- [Roy Wang](https://unsplash.com/@halo4123)
- [James](https://unsplash.com/@jamesjamesjames1)

### React Tutorial

React portion mostly created by following the tutorial from Udemy.com by Maximilian Schwarzmüller.
https://www.udemy.com/share/101Wby3@P2ZgaDiSBSRshR4vFzrEGM0T1Z0BPuN0sF3qbHjzApryZ10YpcX6GOHSzf4bzenSsQ==/
