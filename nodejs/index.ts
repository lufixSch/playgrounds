const msg = {
  history: [
    {
      entity_id: 'sensor.nas_temperature',
      state: '46.2',
      attributes: {
        unit_of_measurement: '°C',
        friendly_name: 'Nas Temperature',
        icon: 'mdi:thermometer',
        device_class: 'temperature',
      },
      last_changed: '2021-07-16T10:10:34.421000+00:00',
      last_updated: '2021-07-16T10:10:34.421000+00:00',
    },
    {
      entity_id: 'sensor.nas_temperature',
      state: '45.7',
      attributes: {
        unit_of_measurement: '°C',
        friendly_name: 'Nas Temperature',
        icon: 'mdi:thermometer',
        device_class: 'temperature',
      },
      last_changed: '2021-07-16T10:10:50.778763+00:00',
      last_updated: '2021-07-16T10:10:50.778763+00:00',
    },
    {
      entity_id: 'sensor.nas_temperature',
      state: '46.2',
      attributes: {
        unit_of_measurement: '°C',
        friendly_name: 'Nas Temperature',
        icon: 'mdi:thermometer',
        device_class: 'temperature',
      },
      last_changed: '2021-07-16T10:11:54.002969+00:00',
      last_updated: '2021-07-16T10:11:54.002969+00:00',
    },
    {
      entity_id: 'sensor.nas_temperature',
      state: '45.7',
      attributes: {
        unit_of_measurement: '°C',
        friendly_name: 'Nas Temperature',
        icon: 'mdi:thermometer',
        device_class: 'temperature',
      },
      last_changed: '2021-07-16T10:14:00.563310+00:00',
      last_updated: '2021-07-16T10:14:00.563310+00:00',
    },
    {
      entity_id: 'sensor.nas_temperature',
      state: '46.7',
      attributes: {
        unit_of_measurement: '°C',
        friendly_name: 'Nas Temperature',
        icon: 'mdi:thermometer',
        device_class: 'temperature',
      },
      last_changed: '2021-07-16T10:15:03.806905+00:00',
      last_updated: '2021-07-16T10:15:03.806905+00:00',
    },
    {
      entity_id: 'sensor.nas_temperature',
      state: '45.2',
      attributes: {
        unit_of_measurement: '°C',
        friendly_name: 'Nas Temperature',
        icon: 'mdi:thermometer',
        device_class: 'temperature',
      },
      last_changed: '2021-07-16T10:16:07.279813+00:00',
      last_updated: '2021-07-16T10:16:07.279813+00:00',
    },
    {
      entity_id: 'sensor.nas_temperature',
      state: '46.2',
      attributes: {
        unit_of_measurement: '°C',
        friendly_name: 'Nas Temperature',
        icon: 'mdi:thermometer',
        device_class: 'temperature',
      },
      last_changed: '2021-07-16T10:17:10.560885+00:00',
      last_updated: '2021-07-16T10:17:10.560885+00:00',
    },
    {
      entity_id: 'sensor.nas_temperature',
      state: '46.7',
      attributes: {
        unit_of_measurement: '°C',
        friendly_name: 'Nas Temperature',
        icon: 'mdi:thermometer',
        device_class: 'temperature',
      },
      last_changed: '2021-07-16T10:18:13.856499+00:00',
      last_updated: '2021-07-16T10:18:13.856499+00:00',
    },
    {
      entity_id: 'sensor.nas_temperature',
      state: '45.7',
      attributes: {
        unit_of_measurement: '°C',
        friendly_name: 'Nas Temperature',
        icon: 'mdi:thermometer',
        device_class: 'temperature',
      },
      last_changed: '2021-07-16T10:19:17.254199+00:00',
      last_updated: '2021-07-16T10:19:17.254199+00:00',
    },
    {
      entity_id: 'sensor.nas_temperature',
      state: '45.2',
      attributes: {
        unit_of_measurement: '°C',
        friendly_name: 'Nas Temperature',
        icon: 'mdi:thermometer',
        device_class: 'temperature',
      },
      last_changed: '2021-07-16T10:20:20.770872+00:00',
      last_updated: '2021-07-16T10:20:20.770872+00:00',
    },
  ],
};

msg.history.reduce((prev, curr) => Number(prev) + Number(curr.state), 0) / msg.history.length;
