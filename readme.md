# Reddit Navigator

Reddit Navigator is a Google Chrome extension that allows you to navigate sequentially through Reddit comments. It's function ality is similar to the navigational controls available in most Reddit mobile apps, like the one available in Slide for Reddit.

### Usage
After being installed, you'll see two bottons on the left lower corner of your screen.
Down Arrow moves you down the thread, from comment to comment, skipping any deleted comments.
Up Arrow moves you up the thread in the same manner.
Some subreddits might change the style of the rendered buttons (example in https://www.reddit.com/r/spacex/).

### Building
This requires you to have NodeJS 6+ and NPM 3+ installed.
Clone/Fork the repository to your machine and install the dependencies:

    npm install
    
A `development` build is one containing the unpacked extension bundles ready to be manually imported to Chrome through
the extension page. To generate it, run:

    npm run build
    
It'll output the extension to a `dist/` directory in the project root.

A file watcher is also available:

    npm run watch
    
To create a release ready build (zip folder containing the extension ready to be released in the Store), run:

    num run release
    
It'll output the same unpacked extension to the `dist/` directory, along with a timestamped and 
versioned zip archive in the `release/` directory of your project root.


### Instalation
To manually install your unpacked extension, simply follow this steps:
- Navigate to your Chrome Extensions manager page and enable Developer Mode.
- Click 'Load Unpacked Extension' and then select the selection `dist/` directory after you've built it.
- Navigate to a Reddit thread and enjoy.

If you wish to simply use the extension, a preview version is available at [Chrome Web Store](https://chrome.google.com/webstore/detail/reddit-navigator/dmidjdkgniepmoepdabkfkmankofhonb).

Any feedback would be appreciated. Feel free to post an Issue to do so.
