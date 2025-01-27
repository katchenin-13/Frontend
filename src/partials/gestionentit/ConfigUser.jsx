import React from 'react';
import ConfigurableModal from './ConfigurableModal';

const ConfigUser = () => {
    return (
        <div>
            <h1>React Configurable Modal Example</h1>
            <ConfigurableModal
                title="Creation de entites"
                content="Voici un contenu personnalisé pour cette modal."
                acceptButtonText="Confirmer"
                declineButtonText="Annuler"
                onAccept={() => alert('Vous avez accepté !')}
                onDecline={() => alert('Vous avez refusé !')}
                modalWidth="max-w-xl" // Largeur personnalisée
                modalHeight="h-96"   // Hauteur personnalisée
                modalStyles={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
              
    
            />
        </div>
    );
};

export default ConfigUser;
