import * as React from 'react';
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 0;
const MAX = 30 ;
type OwnPropsType = {
    handleStrip:(values:number[])=>void,
    values: number[],
}

class Strip extends React.Component<OwnPropsType> {
    // state = {
    //     [0, 50] values:
    // };
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    margin: "0 2em"
                }}
            >
                <Range
                    values={this.props.values}
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    onChange={values => this.props.handleStrip( values )}
                    renderTrack={({ props, children }) => (
                        <span
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style,
                                height: "36px",
                                display: "flex",
                                width: "100%"
                            }}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    height: "5px",
                                    width: "100%",
                                    borderRadius: "4px",
                                    background: getTrackBackground({
                                        values: this.props.values,
                                        colors: ["#000", "#ccc", "#000"],
                                        min: MIN,
                                        max: MAX
                                    }),
                                    alignSelf: "center"
                                }}
                            >
                                {children}
                            </div>
                        </span>
                    )}
                    renderThumb={({ props, isDragged }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: "20px",
                                width: "20px",
                                borderRadius: "4px",
                                backgroundColor: "#FFF",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0px 2px 6px #AAA"
                            }}
                        >
                            <div
                                style={{
                                    height: "16px",
                                    width: "5px",
                                    backgroundColor: isDragged ? "#000" : "#CCC"
                                }}
                            />
                        </div>
                    )}
                />
                <label style={{ margin: "10px", color:'white'}} id="output">
                    {this.props.values[0].toFixed(1)}
                </label>
                <label style={{ margin: "10px", color:'white' }} id="output">
                    {this.props.values[1].toFixed(1)}
                </label>
            </div>
        );
    }
}

export default Strip
