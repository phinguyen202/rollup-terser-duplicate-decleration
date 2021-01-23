import { CoordinateModel } from '@model/common.model';
import React, { FunctionComponent } from 'react';

interface Props extends CoordinateModel { }

const width: number = 14.59;
const height: number = 30;

function JSX({ x = 0, y = 0 }: Props): JSX.Element {
    return (
        <path transform={`translate(${x}, ${y})`} d='M 6.0771088,-4.8815739e-7 C 4.2732033,-3.1648816e-4 2.8104886,1.4617305 2.8101956,3.2656765 c -2.929e-4,1.804386 1.4626562,3.243152 3.2669132,3.266943 2.0545847,0.02642 4.1417422,-0.811043 5.4584082,-1.918671 -0.249625,1.667259 -1.367517,5.9928135 -2.3430507,8.9282965 -0.9341151,0.484246 -1.9825854,0.917143 -2.7653792,0.878818 0.068719,-0.263738 0.1055676,-0.534904 0.1055676,-0.807458 0,-1.80356 -1.4622461,-3.265366 -3.2657415,-3.265806 C 1.4629491,10.347547 3.5154546e-4,11.809536 4.3979257e-8,13.613605 -2.9287389e-4,15.41812 1.4626562,16.856821 3.2669132,16.880612 5.2522521,16.907032 7.3451504,16.122113 8.6724199,15.07018 7.2461441,19.220276 3.7597768,28.094669 3.1550186,29.501717 2.896665,30.10251 5.2046236,30.17117 5.3771523,29.646835 L 14.565108,1.7244655 c 0.09356,-0.284399 -0.08401,-0.574991 -0.458475,-0.148702 -0.602298,0.68568 -1.221527,1.142362 -1.589197,1.34833 -1.03734,0.581096 -2.351779,1.194595 -3.2804461,1.149164 0.068777,-0.263673 0.1055676,-0.534968 0.1055676,-0.807452 0,-1.803513 -1.4621876,-3.26536598816 -3.265683,-3.26568298816 z' />
    );
}

interface SixteenthRest {
    width: number,
    height: number,
    JSX: FunctionComponent<Props>
}

export default {
    width,
    height,
    JSX
} as SixteenthRest;