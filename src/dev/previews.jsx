import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {AuthProvider} from "../contexts/AuthContext";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/AuthProvider">
                <AuthProvider/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews