import React, { Component } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Poison",
          artist: "Rod Wave",
          album: "Ghetto Gospel",
          id: 9930,
        },
        {
          name: "Blind",
          artist: "DaBaby",
          album: "BLAME IT ON BABY",
          id: 5639,
        },
        {
          name: "Starboy",
          artist: "The Weeknd",
          album: " Starboy",
          id: 1974,
        },
      ],
      playlistName: "Hello world",
      playlistTracks: [
        {
          name: "Poison",
          artist: "Rod Wave",
          album: "Ghetto Gospel",
          id: 9930,
        },
        {
          name: "Blind",
          artist: "DaBaby",
          album: "BLAME IT ON BABY",
          id: 5639,
        },
        {
          name: "Starboy",
          artist: "The Weeknd",
          album: " Starboy",
          id: 1974,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              searchResults={this.state.searchResults}
            />
            <Playlist
              onRemove={this.removeTrack}
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
        <h2>
          Made with <span className="highlight">♥</span> from London.
        </h2>
      </div>
    );
  }
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === tracks.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
  }
  search(searchTerm) {
    console.log(searchTerm)
  }
}

export default App;
