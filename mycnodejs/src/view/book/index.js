import React, { Component } from 'react'
import data from "./data"
import {Card} from "antd"

class Book extends Component {
  render() {
    return (
      <div className="bookBox">
        <div className="bookMain wrap">
          {/* <Card 
            title="Node.js入门"
            loading={false}
            type="inner"
          > */}
            {data.map((item,index)=>(
              <Card title={item.title} type="inner" key={index}>
                <div 
                  dangerouslySetInnerHTML={{
                    __html:item.content
                  }}
                >


                </div>  

              </Card>  
            ))}


            
          {/* </Card> */}
        </div>  
      </div>
    )
  }
}

export default Book