import React from 'react';

export const  GlassHoc = (BaseComponent) => {
    class GlassHoc extends React.Component {
       
        
        render() {
            return <React.Fragment>
                {/* Обернутый компонент */}
                {/* css pointer-events none */}
                <div style={{backgroundColor:"rgba(1,1,1,0.5"}}><BaseComponent {...this.props}/></div>
            </React.Fragment>
        }
    }
    return GlassHoc;
};

