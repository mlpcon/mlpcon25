import obs1 from '@/assets/images/obs1.png'
import obs2 from '@/assets/images/obs2.png'
import css from './style.module.scss'

export const Streaming = () => {
  return <div class={css.wrapper}>
    <h1>Streaming</h1>
    <h2>Suggested streaming settings for /mlp/ con panelists</h2>
    <h3>Prerequisites</h3>
    <ul>
      <li>Reasonably <b>fast Internet access</b> (low-speed DSL may not work)</li>
      <li>Highly recommend an <b>Ethernet (cable) connection</b> over WiFi! Even the best WiFi connections can experience random latency spikes that will cause your stream to stutter!</li>
      <li>We recommend you use <a href="https://obsproject.com/">OBS Studio</a> (Free and Open Source Software) to stream your panels</li>
      <li>If you want to save a copy of your panel, <b>be sure to record it in OBS Studio</b> (unless you are using YouTube)</li>
    </ul>
    <h3>Key Settings</h3>
    <p>When setting up OBS Studio, it's important to understand how your settings will affect the viewers of your stream. This will vary based upon the streaming platform you plan to use. </p>
    <h4>YouTube</h4>
    <p>YouTube is able to reencode your video streams, so the limitation with this platform will be <b>your computer hardware and network connection</b>. Make sure your settings in OBS Studio do not overwhelm your hardware or network connection. This may take trial and error. You will want to stream to an unlisted YouTube stream and have a friend (or me, I'm available to help) work with you to test your stream and make sure it looks okay. YouTube has <a href={'https://support.google.com/youtube/answer/2853702?hl=en'}>a page</a> that lists recommended bitrates based on your desired resolution and framerate. It's recommended you follow their recommendations and use the highest bitrate your equipment can handle. </p>
    <h4>Other Platforms</h4>
    <p>If you are planning to stream using <a href="https://picarto.tv/">Picarto</a> or <a href="https://angelthump.com/">AngelThump</a>, your video stream <b>will not be reencoded</b>, so you must stream with a resolution and bitrate that will not overwhelm your viewer's network connection. The following settings in OBS Studio are recommended (feel free to lower the bitrate or resolution if you so desire or if your equipment cannot handle these recommendations): </p>
    <ul>
      <li>Bitrate: 1500Kbps (maximum: 2500Kbps, use caution with going this high, you will likely get complaints from people with shitty Internet connections)</li>
      <li>Rescale Output: 1280x720 (or lower)</li>
    </ul>
    <p>Example of minimum OBS Studio settings using the default x264 encoder:</p>
    <img src={obs1} alt="Example of minimum OBS Studio settings" />
    <p>Example of minimum OBS Studio settings using the NVIDIA NVENC H.264 encoder:</p>
    <img src={obs2} alt="Example of minimum OBS Studio settings NVIDIA NVENC H.264" />
    <p>As above, <b>you should test your settings before con weekend</b>. Start a stream and get a friend to watch and make sure it looks okay to them. If you don't have a friend, I can always help! (Unless it's con weekend, once con begins I'll be way too busy to do something like that.) If you have any questions, please let me know. </p>
  </div>
}