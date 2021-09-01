package activitypub

import (
	"github.com/owncast/owncast/activitypub/crypto"
	"github.com/owncast/owncast/activitypub/outbox"
	"github.com/owncast/owncast/activitypub/persistence"
	"github.com/owncast/owncast/core/data"
	log "github.com/sirupsen/logrus"
)

func Start(datastore *data.Datastore) {
	persistence.Setup(datastore)
	StartRouter()

	// Test
	if data.GetPrivateKey() == "" {
		privateKey, publicKey, err := crypto.GenerateKeys()
		_ = data.SetPrivateKey(string(privateKey))
		_ = data.SetPublicKey(string(publicKey))
		if err != nil {
			log.Errorln(err)
		}
	}
}

func SendLive() {
	outbox.SendLive()
}

func SendPublicFederatedMessage(message string) {
	outbox.SendPublicMessage(message)
}