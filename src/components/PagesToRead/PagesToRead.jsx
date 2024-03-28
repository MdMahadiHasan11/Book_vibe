import PropTypes from 'prop-types';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from "react";
// import { scaleOrdinal } from "d3-scale";
// import { schemeCategory10 } from "d3-scale-chromatic";

// import {  } from 'react-chartjs-2';
// import { schemeCategory10 } from 'd3-scale';







const PagesToRead = () => {

    // const colors = scaleOrdinal(schemeCategory10).range();


    const [data, setBarItem] = useState([]);
    useEffect(() => {
        const getDefaultData = JSON.parse(localStorage.getItem("read-mark")) || [];
        setBarItem(getDefaultData);
    }, [])


    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;


        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };





    return (

        <ResponsiveContainer width="100%" height={400}>

            <BarChart  data={data} >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis />
                {/* <Bar dataKey={"totalPages"} fill={colors} stroke='red' /> */}


                {/* <Bar
                dataKey="totalPages"
                fill="#8884d8"
                // shape={<TriangleBar />}
                // label={{ position: "top" }}
            >
            </Bar> */}


                <Bar dataKey={"totalPages"} fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>

                <XAxis dataKey="bookName" />
                <Tooltip></Tooltip>
            </BarChart>

        </ResponsiveContainer>



    );

};
// , x, y, width, height

PagesToRead.propTypes = {
    fill: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
}

export default PagesToRead;