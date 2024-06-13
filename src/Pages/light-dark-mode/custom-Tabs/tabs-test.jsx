import Tabs from "./tabs";
import './tabs.css';

export default function TabTest() {
    const tabs = [{
        label: 'Tab 1 ',
        content:<div>This is tab content 1</div>
    },
        {label: ' Tab  2',
        content: <div>
            This is tab  content 2
            </div>
        },
        {
            label: 'Tab 3',
            content: <div>
                This is tab content 3
            </div>
        }
        
        
    ]
    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);

    }
    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}