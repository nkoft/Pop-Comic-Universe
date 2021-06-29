# Pop-Comic-Universe

Comic book appreciation app where users can come to review, add and browse various comic books.

<br>

## MVP

The landing page connects to the home page or sign up. Users can see the comic book data and have partial access to details page. Only registered and authenticated users will be able to have full CRUD capablities(add,edit,delete comic book data).

<br>

### Goals

- Back End built out with API connection to Front End through Ruby on Rails
- Front End built with React
- Full Crud
- Authentication with hashes
- Database custom built on back end
- CSS

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|    Library    | Description                                  |
| :-----------: | :------------------------------------------- |
|     React     | _Front End Framework_                        |
| React Router  | _Navigation Components_                      |
|     JSON      | _Front end dependancies(axios)_              |
|     Ruby      | _Language used to build this app_            |
| Ruby on Rails | _Back End Framework_                         |
|    GemFile    | _Store Ruby dependancies(cors, bcrypt, etc)_ |
|     CORS      | _Cross-Origin Resource Sharing_              |

<br>

### Client (Front End)

#### Wireframes

https://www.figma.com/file/5Io4CRNvNoQGfSJhRg8whx/Comic-Review%2FAppreciation-APP?node-id=0%3A1

#### Component Tree

https://whimsical.com/comic-book-app-diagram-2Gpp4mJMQXHv44ynX4uGWK

#### Component Architecture

```structure

src
|__ components/
      |__ Layout/
          |__ Layout.jsx
          |__ Layout.css
      |__ Comic/
          |__ Comic.jsx
          |__ Comic.css
      |__ ComicCard
      |__ ComicCards
      |__ Search
      |__ Sort
      |__ Nav
      |__ Footer

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                                                       | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Ruby File                                           |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Build Schema and Models                                    |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create and Seed Data                                       |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create Routes                                              |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Build out Controllers                                      |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Add User Authentication                                    |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Add Json dependancies and build react within client folder |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create necessary components and define routes              |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Render to Screens                                          |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Style with CSS                                             |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL                                                      |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

https://drive.google.com/file/d/1idx6nMp9Oc9IMh8PL-93PT6qVC4kjNNQ/view?usp=sharing

---

## Post-MVP

- Separate admin and user privileges (only admin can delete posts)
- Users can leave a rating
- Users can also participate in comment section

---

## Code Showcase

     </div>
        {props.user && (
          <Link className="edit-button" to={`/comics/${comic.id}/edit`}>
            <button className="edit-btn">Edit</button>
          </Link>
        )}
      </div>

- This code makes edit a user priviledge so if theres no
  user then theres no edit button.
