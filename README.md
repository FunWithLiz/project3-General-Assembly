# People Are People

Are you looking for more friends but feel too awkward approaching classmates in person? Are you struggling to start conversations without any knowledge of a students similar interests? Well guess what, you are not alone. Welcome to People Are People!

Our app connects like-minded students together efficiently, because who has time to mingle in-person these days? To get started, register as a user and pick some interests - we'll take over from there.

## User Stories:

1. I'm a General Assembly student looking to network with like-minded students.
2. I'm a General Assembly alumni looking for potential new-hires for a start-up that fit our culture.
3. I'm a General Assembly student looking for new friends to hangout with.
4. I'm a General Assembly employee interested in networking with GA students in WDI cohorts for project collaboration.
5. I'm a General Assembly alumni recentely relocated to San Fran looking for GA connections.

## ERD:

<img width="1151" alt="project 3 erd" src="https://media.git.generalassemb.ly/user/14895/files/fb90e070-a45c-11e8-9aeb-b9d54761f282">

## Wireframe:

![friend_app](https://media.git.generalassemb.ly/user/14895/files/6aa84d8e-a45f-11e8-9706-a1739b113e73)

![friend_app2](https://media.git.generalassemb.ly/user/14895/files/75028e02-a45f-11e8-8057-6ae1f3c51505)

![friend_app4](https://media.git.generalassemb.ly/user/14895/files/824c8bee-a45f-11e8-872e-c9f05657ad7a)

![friend_app5](https://media.git.generalassemb.ly/user/14895/files/98b194b0-a45f-11e8-9e16-f5d168306203)

![friend_app6](https://media.git.generalassemb.ly/user/14895/files/a13caee4-a45f-11e8-9d97-9970f702c4d8)

## MVP:

1. You're able to create a username with interests. (C, R).
2. You're able to update interests (U, R).
3. You're able to delete interests (D, R).
4. You can filter on categories and subcategories to see all users related to your interests (R).

## Code Snippet:

Multiple page form:

Multiple page form. This front-end component was particularly tricky because it required that the form be repopulated on every submit, leading the user through separate sections of the form. Each repopulation was based on querying specific categories of interests, (for example, sports,  movies, music, etc.) from the backend category/interests table.  Another challenge was storing the user's recorded interests in state for the final submit function.

```
  createInterests(final) {
    saveInterests(final)
      .then(data => fetchInterests())
      .then(data => {
        this.setState({
          checkedInterests: data
        })
      })
      .catch(e => {
        console.log(e);
      })
  }

handleSubmit(e) {
        e.preventDefault();
        const final = [this.state.userId, this.state.checkedItems]
        this.props.onSubmit(final);

        this.setState({ checkedItems: [] })
        this.unCheck();

        const here = this.state.hereCategory;
        if (here === "Food") {
            this.setState({
                hereCategory: "Music"
            })
            this.props.callingInterests(this.state.allCategories[0])
        } else if (here === "Music") {
            this.setState({
                hereCategory: "Sports"
            })
            this.props.callingInterests(this.state.allCategories[1])
        }   else if (here === "Sports") {
            this.setState({
                hereCategory: "Movies"
            })
            this.props.callingInterests(this.state.allCategories[2])
        }   else if (here === "Movies") {
            this.setState({
                hereCategory: "DIY"
            })
            this.props.callingInterests(this.state.allCategories[3])
        }   else if (here === "DIY") {
            this.setState({
                hereCategory: "Pet-Peeves"
            })
            this.props.callingInterests(this.state.allCategories[4])
        } else if (here === "Pet-Peeves") {
            this.props.turnToFilter();
        }
    }
```

Project 3 - Group 6 - WDI Lambda

- Shawn Hassen
- Elizbeth Fun
- Dannee Kim
- Waseem Nafisi

## Resources:

1. Express: v4.16.3
2. Body-parser: v1.18.3
3. Cors: v2.8.4
4. Morgan: v1.9.0
5. Nodemon: v1.18.3
6. Pg-promise: v8.4.6
7. React: v16.4.2
8. Flexbox: v0.0.3


