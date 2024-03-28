import React from 'react';

export default function Listing (props){

    return (
        <React.Fragment>
        {props.listingData ? 
                (<div className="container">
                    <h1> Recipes Listing </h1>
                    {props.listingData.map(listing=>
                        <React.Fragment key={listing._id}>
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">
                                        {listing.title}
                                    </h3>
                                    <h4>
                                        Ingredients
                                    </h4>
                                    <ul>
                                        {listing.ingredients.map(item => 
                                            <li key={item}> {item} </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </React.Fragment>
                )}
            </div>
        ) : (<p> loading... </p>)
        }
        </React.Fragment>
    )
}


