import React from "react";
import { Col } from 'reactstrap';


const Colxx: React.FC<any> = (props:any) => (
    <Col {...props} widths={['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']} />
);

const Separator: React.FC = (props:any) => (
    <div className={`separator ${props.className}`} style={{borderBottom: '1px solid rgb(243, 243, 243)'}}></div>
);

export { Colxx, Separator }