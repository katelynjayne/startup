# RUN DIARY
http://rundiary.click
## Elevator Pitch
If you consider yourself a runner, you may have found yourself hoping for a simple and quick way to view how your times have improved throughout your workouts and races. **Run Diary** will be your one-stop website for tracking your running statistics. You can categorize each run that you log as a workout or race, and see how it stacks up against previous similar runs. You can also see and interact with your friends's runs!

## Key Features
* Personal login to store all data
* Ability to record the time, distance, type (workout or race), and optional splits of a run
* Comprehensive log of all runs
* Graphs generated comparing times of runs of same type and similar distance
* Ability for users to view other profiles
* Commenting feature to encourage and interact with other user's posted runs

## Design
![Design Sketch](./design_sketch.png)

## Technologies
* **HTML**: Builds well-organized structure. Two pages: run log (comprehensive list of all logged runs) and run analysis (given data and comparitive statistics for one particular run).
* **CSS**: Consistent styling across pages. Good contrast and colors.
* **JavaScript**: Ability to login, move from page to page, generate graphs, visit another user's run log, leave comments.
* **React**: Ease for users to interact with the site, allows frameworks to interact well.
* **Service**: Endpoints for creating a new account, posting a run, generating graphs using [Image-Charts](https://documentation.image-charts.com/).
* **DB/Login**: Login information is securely stored in a database, along with the data for each run that user has logged. The run log can be retreived at each login or if another user visits their log.
* **WebSocket**: Comments on posts are instantly visible, allowing users to interact in real time.

