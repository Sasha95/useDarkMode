import React from 'react';
import {useDarkMode} from './useDarkMode';
import Toggle from './Toggle';
import './App.scss'
import data from './data';
import {useMedia} from './useMedia';
import 'bulma/css/bulma.css';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  const columnCount = useMedia(
    // Media queries
    ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
    // Column counts (relates to above media queries by array index)
    [5, 4, 3],
    // Default column count
    2
  );

  // Create array of column heights (start at 0)
  let columnHeights = new Array(columnCount).fill(0);

  // Create array of arrays that will hold each column's items
  let columns = new Array(columnCount).fill().map(() => []);

  data.forEach(item => {
    // Get index of shortest column
    const shortColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
    // Add item
    columns[shortColumnIndex].push(item);
    // Update height
    columnHeights[shortColumnIndex] += item.height;
  });

  return (
      <div className="App">
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="columns is-mobile">
        {columns.map((column, i) => (
          <div className="column" key={i}>
            {column.map((item, a) => (
              <div
                className="image-container"
                style={{
                  // Size image container to aspect ratio of image
                  paddingTop: (item.height / item.width) * 100 + '%'
                }}
                key={a}
              >
                <img src={item.image} alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
