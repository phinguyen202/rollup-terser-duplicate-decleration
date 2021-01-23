import React from 'react';
import TrebleClef from 'components/treble';
import QuarterNote from 'components/quarter';

export class SvgMusicNotation extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <svg width={500} height={500} >
                <TrebleClef.JSX />
                <QuarterNote.JSX x={50} y={20}/>
            </svg>
        );
    }
}