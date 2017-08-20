# Reddit Navigator

Reddit Navigator is a Google Chrome extension that allows you to navigate sequentially through Reddit comments. It's function ality is similar to the navigational controls available in most Reddit mobile apps, like the one available in Slide for Reddit.

### Usage
After being installed, you'll see two bottons on the left lower corner of your screen.
Down Arrow moves you down the thread, from comment to comment, skipping any deleted comments.
Up Arrow moves you up the thread in the same manner.
Some subreddits might change the style of the rendered buttons (example in https://www.reddit.com/r/spacex/).

### Building
This requires you to have NodeJS 6+ and NPM 3+ installed.
Clone the repository to your local machine and then run `npm install` to install all dependencies.
To get a `development` build (recommended), simply run `npm run build`. It'll generate a `dist/` directory containing the unpacked extension to add in your Chrome Extension Manager page. A watcher is available through `npm run watch`.
To get a `release` build, run `npm run release`, and it'll output a zip file in the `release/` folder named after the current release version and a timestamp.

### Instalation
The extension is not currently available on Chrome Web Store (plan on doing so when I feel the extension is ready), so you'll have to manually add the unpacked package on [chrome://extensions/](chrome://extensions/)

- Navigate to your Chrome Extensions manager page and enable Developer Mode.
- Click 'Load Unpacked Extension' and then select the selection `dist` directory after you've built it.
- Navigate to a Reddit thread and enjoy.

