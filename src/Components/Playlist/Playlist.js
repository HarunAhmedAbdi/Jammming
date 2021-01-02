import React, { Component } from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  render() {
    return (
      <div className="Playlist">
        <input
          defaultValue={"Give you playlist a fabulous name!"}
          onChange={this.handleNameChange}
        />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
  handleNameChange(e) {
    let name = e.target.value;
    this.props.onChange(name);
  }
}

export default Playlist;
