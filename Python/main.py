import asyncio
class LIDAR:
    lidar_data = None
    set_lidar_cb = None

    def __init__(self, set_lidar_cb) -> None:
      self.set_lidar_cb = set_lidar_cb

    async def run(self):
        """
          UART empfangen -> Daten speichern
        """
        self.lidar_data = "ABC"
        self.set_lidar_cb(self.lidar_data)

class Antenna():
    lidar_data = None

    async def run(self):
        """
          USB empfangen -> et0 senden
        """
        usb_data = None

        et0_data = usb_data + self.lidar_data

    def set_lidar_data(self, data):
        self.lidar_data = data

class SPSSend:

    async def run(self):
        """
          et0 empfangen -> USB senden
        """

        pass


if __name__ == "__main__":
    antenna = Antenna()
    lidar = LIDAR(antenna.set_lidar_data)
    sps_send = SPSSend()

    main = asyncio.gather(antenna.run(), lidar.run(), sps_send.run())
    asyncio.get_event_loop().run_until_complete(main)