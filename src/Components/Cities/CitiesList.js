import { Collapse } from 'antd';
import CityInfo from "./CityInfo";

const { Panel } = Collapse;

const CitiesList = () => {
    function callback(key) {
        console.log(key);
    }

    return (
        <Collapse onChange={callback}>
            <Panel header="This is panel header 1" key="1">
                <CityInfo />
            </Panel>
            <Panel header="This is panel header 2" key="2">
                <CityInfo />
            </Panel>
            <Panel header="This is panel header 3" key="3">
                <CityInfo />
            </Panel>
        </Collapse>
    )
}

export default CitiesList;