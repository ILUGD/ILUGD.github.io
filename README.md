# ilugd.github.io
Homepage of India Linux User Group Delhi and National Capital Region(NCR).  

## Volunteers

We requests all volunteers to add following things:
1. Profile picture
2. Name
3. External links to your profiles on other platforms 

Please keep in mind that we only expect you to share links to following platforms:
1. Instagram
2. Twitter
3. Linkedin
4. Facebook
5. Youtube
  
### Adding yourself as a volunteer

1. Clone this repository.
2. Create a new branch with name as `volunteer/date-of-meetup/your-name`. For example, `volunteer/29-06-2019/Kuntal-Majumder`.*This really helps us keep PRs organized.*
3. Rename your profile picture as `your-name.png`. For example, `Kuntal-Majumder.png`. Copy your profile picture to the assets/img/volunteer directory.  *Profile pictures in PNG format recommended.* 
4. Fireup your code editor, open the `volunteer_profile.html`. **DO NOT SAVE CHANGES TO THIS FILE, THIS IS A TEMPLATE!**. This file is a template where you need to fill your data. Once you are done, you might have something like this:

```html
<li class="volunteers-list-item">
  <article class="volunteer">
    <img alt="Profile picture" src="./assets/img/Kuntal-Majumder.png">
    <p>Volunteer Name</p>
    <ul class="links">
      <li><a href="https://github.com/hellozee" target="_blank"><i class="fab fa-github"></i></a></li>
    </ul>
  </article>
</li> 
```

5. Copy the edited code. Open the `volunteers.html`. Look for the comment `<!--ADD NEW VOLUNTEER PROFILES HERE-->`. 
```html
  <!--Everything above body-->
  <body class="page-home">

    <section>
      <h1>Volunteers</h1>
      <ul class="volunteers-list-container">
        <!--Existing Volunteer profiles...-->



        <!--ADD NEW VOLUNTEER PROFILES HERE-->
      </ul>
    </section>

  </body>
</html>
```

6. Paste the edited code above the `<!--ADD NEW VOLUNTEER PROFILES HERE-->` comment. *Leave 2 lines between your profile and the comment so that its easily noticable by other who might want to add their profile.*

7. Commit changes to your local branch. **DISCARD ANY CHANGES ON VOLUNTEER_PROFILE.HTML**. 
7. Push changes online and raise a Pull Request.