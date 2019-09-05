SELECT
    OS, SUM(Price * Count) as Total,
    SUM(Count) as Devices,
    SUM(Price * Count) / SUM(Count) as Avg_Device_Price
FROM Devices
GROUP BY OS
ORDER BY Total ASC, Avg_Device_Price ASC;