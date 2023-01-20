import { useState } from "react";







export function Seat() {
  const [favorite, setFavorite] = useState(false);


  return (
    <div className="color">
      <div className="timing-open">
        <div>
          <h4>selected</h4>
          <input type="number" id="quantity" name="quantity" min="1" max="600" />
        </div>
        <div>
          <h4>Timeing</h4>
          <select>
            <option>11:00 am</option>
            <option>1:30 pm</option>
            <option>6:30 pm</option>
            <option>10:00 pm</option>
          </select>
        </div>
        <div>
          <button>sumbmit</button>
        </div>
      </div>
      <div className="infor">
        <div className="opps">N/A
          <div className="cap"></div>
        </div>
        <div className="opps">select
          <div className="cap"></div>
        </div>
        <div className="opps">
          solud
          <div className="seat-sold"></div>
        </div>
      </div>
      <div className="seat-opsiont">
        <div className="mt"></div>
        <div className="mt"></div>
        <div className="mt"></div>
        <div className="mt"></div>
        <div className="mt"></div>
        <div className="itmes"><b>Fist class:170 Rs</b></div>
        <div className="mt"></div>
        <div className="mt"></div>
        <div className="mt"></div>
        <div className="mt"></div>
        <div className="mt"></div>
      </div>
      <div className="seat-opsiont">

        <div className="cap"><a>A</a></div>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>1</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite == true ? "green" : "" }}><a>2</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>3</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>4</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>5</a></button>
        <div className="mt"></div>

        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>6</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>7</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>8</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>9</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>10</a></button>
      </div>
      <div className="seat-opsiont">
        <div className="cap"><a>B</a></div>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>1</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite == true ? "green" : "" }}><a>2</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>3</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>4</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>5</a></button>
        <div className="mt"></div>

        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>6</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>7</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>8</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>9</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>10</a></button>
      </div>
      <div className="seat-opsiont">
        <div className="cap"><a>C</a></div>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>1</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite == true ? "green" : "" }}><a>2</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>3</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>4</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>5</a></button>
        <div className="mt"></div>

        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>6</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>7</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>8</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>9</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>10</a></button>
      </div>
      <div className="seat-opsiont">
        <div className="cap"><a>D</a></div>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>1</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite == true ? "green" : "" }}><a>2</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>3</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>4</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>5</a></button>
        <div className="mt"></div>

        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>6</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>7</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>8</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>9</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>10</a></button>
      </div>

      <div className="seat-opsiont">
        <div className="cap"><a>E</a></div>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>1</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite == true ? "green" : "" }}><a>2</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>3</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>4</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>5</a></button>
        <div className="mt"></div>

        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>6</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>7</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>8</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>9</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>10</a></button>
      </div>
      <div className="seat-opsiont">
        <div className="mt"></div>
        <div className="mt"></div>
        <div className="mt"></div>
        <div className="mt"></div>
        <div className="mt"></div>
        <div className="itmes"><b>  second class:120 Rs</b></div>
        <div className="mt"></div>
        <div className="mt"></div>
        <div className="mt"></div>
        <div className="mt"></div>
        <div className="mt"></div>
      </div>
      <div className="seat-opsiont">
        <div className="cap"><a>F</a></div>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>1</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite == true ? "green" : "" }}><a>2</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>3</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>4</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>5</a></button>
        <div className="mt"></div>

        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>6</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>7</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>8</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>9</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>10</a></button>
      </div>
      <div className="seat-opsiont">
        <div className="cap"><a>G</a></div>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>1</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite == true ? "green" : "" }}><a>2</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>3</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>4</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>5</a></button>
        <div className="mt"></div>

        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>6</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>7</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>8</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>9</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>10</a></button>
      </div>



      <div className="seat-opsiont">
        <div className="cap"><a>H</a></div>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>1</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite == true ? "green" : "" }}><a>2</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>3</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>4</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>5</a></button>
        <div className="mt"></div>

        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>6</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>7</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>8</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>9</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>10</a></button>
      </div>
      <div className="seat-opsiont">
        <div className="cap"><a>I</a></div>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>1</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite == true ? "green" : "" }}><a>2</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>3</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>4</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>5</a></button>
        <div className="mt"></div>

        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>6</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>7</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>8</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>9</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>10</a></button>
      </div>
      <div className="seat-opsiont">
        <div className="cap"><a>J</a></div>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>1</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite == true ? "green" : "" }}><a>2</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>3</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>4</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>5</a></button>
        <div className="mt"></div>

        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>6</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>7</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>8</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>9</a></button>
        <button className="seat" onClick={() => { setFavorite(true); }} style={{ backgroundColor: favorite === true ? "green" : "" }}><a>10</a></button>
      </div>
      <div className="screen"></div>

    </div>

  );


}
