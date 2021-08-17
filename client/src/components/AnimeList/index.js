import React from 'react';

function AnimeList(props) {
    return (
        <div>
            <form
                className="searchBox"
                onSubmit= {props.HandleSearch}>
                <input
                    type="search"
                    placeholder="Search for an anime"
                    required
                    value={props.search}
                    onChange={e => props.SetSearch(e.target.value)}
                />
            </form>
        </div>
    )
}

export default AnimeList;