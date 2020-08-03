import React from 'react'
import { Layer } from 'react-konva';
import ModalCreator from './container/ModalCreator';
import { Label } from '../../utils/_';
import Text from './components/Text';
import { StoreContext } from '../../providers/Store';

export interface RectangleProps {
    selected?: string;
    selectRect?:(id:string)=>void;    
};


const TextModule: React.FunctionComponent<RectangleProps> = (
    {selected='', selectRect = ()=>{}}
) => {
  const { texts, updateTexts } = React.useContext(StoreContext);
  const handlerClick = (e:any, id:any) => {
    if (e.type === 'click') {
        selectRect(id);
      } else if (e.type === 'contextmenu') {
        window.addEventListener("contextmenu", function(a){ a.preventDefault()})
        alert('Right click');
      }
  }
  return (
    <Layer>
      {texts?.map((element: Label, i: number) => {
          return (
            <Text
              key={i} 
              shapeProps={element}
              isSelected={element.id === selected}
              onSelect={(e:any) => handlerClick(e, element.id)}
              onChange={(newAttrs: object) => {
                const rects = texts.slice();
                rects[i] = newAttrs;
                updateTexts(rects);
            }}
            />
          );
      })}
    </Layer>
  );
}

export const TextModal = ModalCreator;
export default TextModule
