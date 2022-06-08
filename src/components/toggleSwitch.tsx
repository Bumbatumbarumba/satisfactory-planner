import React from "react";
import { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../features/app/appSlice';
import Switch from "react-switch";

export const ToggleSwitch = () => {
    const enabled = useSelector((state: RootState) => state.colourSwitch.enabled);
    const dispatch = useDispatch();

    return (
        <div>
            <label>
                <span>Colour tree nodes based on required machine:</span>
                <Switch onChange={() => dispatch(toggle())} checked={enabled}></Switch>
            </label>
        </div>

    );
};