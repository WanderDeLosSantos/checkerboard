import React, { useState, useEffect } from 'react'
 
// commponents
import { 
        EvenBoard,
        OddBoard
    } from 'components'


export function Board () {
    const num = parseInt(this.props.columns, 10)
    this.board = new Array(num).fill().map((val, idx) => {
        return (idx % 2 === 0 ? <EvenBoard columns={this.props.columns} key={idx} /> : <OddBoard columns={this.props.columns} key={idx} />)
    })

return (
    <div id="parent">
        <div>{this.board}</div>
    </div>
)
}