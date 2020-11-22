Tesla lab's projects and achievements showcase website.

## Getting Started

First, run the development server:

```bash
npm i
npm run dev
# or
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Updating the `Our Team` page

Follow these steps to add/update member details on the Our Team page.

- Open the file `content/members.md`
- Under the members/syndicates key, add a new entry:

  ```yaml
  members:
    - name: "John Doe"
      image: "johndoe.jpg"
      github: "<github profile link>"
      linkedin: "<linkedin profile link>"
      portfolio: "<portfolio link>"
  ```

- Place the file `johndoe.jpg` inside `public/images/team/`
- Commit your changes and push to a new branch using `git push origin master:newBranchName` and start a pull request.
