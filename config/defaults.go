package config

import "github.com/owncast/owncast/models"

// Defaults will hold default configuration values.
type Defaults struct {
	Name                 string
	Title                string
	Summary              string
	ServerWelcomeMessage string
	Logo                 string
	Tags                 []string
	PageBodyContent      string

	DatabaseFilePath string
	WebServerPort    int
	WebServerIP      string
	RTMPServerPort   int
	StreamKey        string

	YPEnabled bool
	YPServer  string

	SegmentLengthSeconds int
	SegmentsInPlaylist   int
	StreamVariants       []models.StreamOutputVariant
}

// GetDefaults will return default configuration values.
func GetDefaults() Defaults {
	return Defaults{
		Name:                 "UFAX LIVE",
		Title:                "SEXY LIVE SERVER",
		Summary:              "UFABET คาสิโน 18+ แทงบอลกำไรดี มีพริตตี้ไลฟ์สดโชว์",
		ServerWelcomeMessage: "เว็บแทงบอล UFAPRO888 แห่งนี้ไม่ได้มีดีแค่การเดิมพัน พนันออนไลน์ อย่างเดียว ทางเราได้เพิ่มบริการพิเศษเข้าไปอีก 1 บริการ คือการสมัครเข้า กลุ่มลับพริตตี้ไลฟ์สด20+",
		Logo:                 "logo.png",
		Tags: []string{
			"UFAXLIVE",
			"ufapro888s",
      "ufabet",
		},

		PageBodyContent: "# UFABET คาสิโน 18+ แทงบอลกำไรดี มีพริตตี้ไลฟ์สดโชว์",

		DatabaseFilePath: "data/owncast.db",

		YPEnabled: false,
		YPServer:  "https://ufapro888s.info/",

		WebServerPort:  8080,
		WebServerIP:    "0.0.0.0",
		RTMPServerPort: 1935,
		StreamKey:      "abc123",

		StreamVariants: []models.StreamOutputVariant{
			{
				IsAudioPassthrough: true,
				VideoBitrate:       1200,
				Framerate:          24,
				CPUUsageLevel:      2,
			},
		},
	}
}
