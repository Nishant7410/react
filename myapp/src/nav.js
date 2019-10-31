import React from 'react';

import {Link} from 'react-router-dom';

export default function Nav()
{
    return(
        <div>
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/todo"><button>Todo</button></Link>
        </div>
    );
}