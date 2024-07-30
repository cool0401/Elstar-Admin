import React from 'react'
import { SyntaxHighlighter } from 'components/shared'

const FolderStructure = () => {
	return (
		<>
			<p>
				In this section you will find the basic folder structure and everything you need to get the template up and running.
				Both the demo and starter versions have the same structure, except that the starter version will have fewer files & folders than the demo version as they are not required in the starter.				
			</p>
			<p>Below is a schematic diagram of directory structure:</p>
			<SyntaxHighlighter>
{`
├── public                        # Static resource
|   ├── img                       # Images
|   ├── data                      # Static data
|   └── ...                       # Other static files
├── src
│   ├── assets                    # App static resource
│   │   ├── maps                  # Map meta data 
│   │   ├── styles                # Global CSS files
│   │   └── svg	                  # SVG files
│   ├── components                # General components
│   │   ├── docs                  # Documentations related components
│   │   ├── layout                # Layout components
│   │   ├── route                 # Components related to route
│   │   ├── shared                # Upper level components built on top of ui components
│   │   ├── template              # Template components, such as Header, Footer, Nav, etc...
│   │   └── ui                    # Bottom level components, such as Button, Dropdown, etc...
│   ├── configs                   # Configuration files        
│   │   └── ...          
│   ├── constants                 # Constant files
│   │   └── ...      
│   ├── locales                   # Localization configuration
│   │   ├── lang
│   │   |   └── ...               # Language JSON files
│   │   └── index.js              # Localization entry file
│   ├── mock                      # Mock data for fake API Calls
│   │   ├── data                  # Mock data
│   │   |   └── ...               # Mock data JS files
│   │   ├── fakeApi               # Fake API configuration
│   │   |   └── ...               # Fake API JS files
│   │   └── index.js              # Mock entry file
│   ├── services                  # Service files for managing API integrations
│   │   ├── ApiService.js         # Api request & response handler
│   │   ├── BaseService.js        # Axios configs & interceptors
│   │   └── ...                   # Other service files
│   ├── store                     # Main Redux store
│   │   ├── auth                  # Auth related slices
│   │   |   └── ...      					
│   │   ├── base                  # Base config related slices
│   │   |   └── ...    
│   │   ├── index.js              # Store entry file
│   │   └── rootReducer           # Root reducer
│   ├── utils                     # All reusable function & hooks
│   │   ├── hooks                 # Hooks
│   │   |   └── ...      					
│   │   └── ...                   # Reusable functions 
│   └── views                     # View files that render all the pages
│       ├── ...                   # All view files
│       └── index.js              # View entry point 
├── .gitignore                    
├── jsconfig.json                 # Project javascript configuration file
├── package.json                  
├── package.lock.json            
├── postcss.config.js             # PostCss configuration file
├── README.md  
├── safelist.txt                  # A generated whitelist classes for Tailwind css 
└── tailwind.config.js            # TailwindCSS configuration file
`}
			</SyntaxHighlighter>
		</>
	)
}

export default FolderStructure