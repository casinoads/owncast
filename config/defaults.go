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
		Summary:              "รวมโชว์ถอดหมด เอ็กซ์ เสียว  ทุกรูปแบบ ไม่ว่าจะเป็น คู่เทพ สวิงกิงค์ โชว์เสียว รวมนางแบบ พริตตี้ XX รับประกันระดับพรีเมียม",
		ServerWelcomeMessage: "ปฎิทินไลฟ์สดกลุ่มลับนางแบบ โชว์ถอดหมด เอ็กซ์ เสียว  ทุกรูปแบบ",
		Logo:                 "logo.png",
		Tags: []string{
			"UFAX LIVE",
			"ufapro888s",
		},

		PageBodyContent: "# UFAX LIVE รวมโชว์ถอดหมด เอ็กซ์ เสียว  ทุกรูปแบบ ไม่ว่าจะเป็น คู่เทพ สวิงกิงค์ โชว์เสียว รวมนางแบบ พริตตี้ XX รับประกันระดับพรีเมียม",

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
