import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Alert,
    AlertDescription,
    AlertTitle
} from "@/components/ui/alert";
import { AlertCircle, CheckCircle, Search, Tag, Users, Zap, LogOut, GripVertical, XCircle, MapPin, ListChecks } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from 'framer-motion';

const mockAssets = [
    {
        id: '1',
        name: 'ECG Monitor',
        type: 'Monitoring',
        location: 'Room 101',
        status: 'In Use',
        lastUsed: '2024-07-24 10:00 AM',
        maintenanceSchedule: '2024-08-15',
        maintenanceHistory: [
            { date: '2024-07-01', description: 'Routine check' },
        ],
        usageHistory: [
            { date: '2024-07-24', time: '10:00 AM', user: 'Dr. Smith' },
            { date: '2024-07-23', time: '02:00 PM', user: 'Nurse Jones' },
        ],
        imageUrl: 'https://placehold.co/150x100/EEE/31343C?text=ECG+Monitor&font=Montserrat',
        rfid: 'RFID-123',
    },
    {
        id: '2',
        name: 'Syringe Infusion Pump',
        type: 'Therapeutic',
        location: 'Room 102',
        status: 'Available',
        maintenanceSchedule: '2024-09-20',
        maintenanceHistory: [
            { date: '2024-06-15', description: 'Calibration' },
        ],
        usageHistory: [],
        imageUrl: 'https://placehold.co/150x100/EEE/31343C?text=Infusion+Pump&font=Montserrat',
        rfid: 'RFID-456',
    },
];

const mockUsers = [
    { id: 'user1', name: 'Dr. Smith', role: 'Clinician' },
    { id: 'user2', name: 'Nurse Jones', role: 'Clinician' },
    { id: 'admin1', name: 'Admin User', role: 'Administrator' },
];

const TrackkerApp = () => {
    const [assets, setAssets] = useState(mockAssets);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedAsset, setSelectedAsset] = useState(null);

    const handleSearch = (e) => setSearchTerm(e.target.value);

    const filteredAssets = assets.filter(asset =>
        asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asset.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Trackker Asset Management</h1>
            <Input
                placeholder="Search assets by name or ID..."
                value={searchTerm}
                onChange={handleSearch}
                className="mb-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAssets.map(asset => (
                    <Card key={asset.id} onClick={() => setSelectedAsset(asset)} className="cursor-pointer hover:shadow-md">
                        <CardHeader>
                            <CardTitle>{asset.name}</CardTitle>
                            <CardDescription>{asset.type}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Location: {asset.location}</p>
                            <p>Status: {asset.status}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {selectedAsset && (
                <div className="mt-6 p-4 border rounded shadow-lg">
                    <h2 className="text-xl font-bold mb-2">{selectedAsset.name} Details</h2>
                    <p><strong>ID:</strong> {selectedAsset.id}</p>
                    <p><strong>Location:</strong> {selectedAsset.location}</p>
                    <p><strong>Status:</strong> {selectedAsset.status}</p>
                    <p><strong>Maintenance Schedule:</strong> {selectedAsset.maintenanceSchedule}</p>
                    <Button onClick={() => setSelectedAsset(null)} className="mt-4">Back to List</Button>
                </div>
            )}
        </div>
    );
};

export default TrackkerApp;