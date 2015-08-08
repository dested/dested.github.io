angular.module('runrun', [])
    .controller('RunRunCtrl', ['$scope', '$location', function($scope, $location) {
        $scope.model = {};

        $scope.model.sections = [];
        $scope.model.calculated = {};



        $scope.model.addSection = function() {
            $scope.model.sections.push({
                durationInSeconds: 60,
                speed: 3.5
            });
        };
        $scope.model.removeSection = function(section) {
            $scope.model.sections.splice($scope.model.sections.indexOf(section), 1);
        }
        $scope.model.calculate = function() {
            var startDistance = 13.109375;

            var distance = startDistance;
            var timeInSeconds = 0;
            var iterations = 0;
            if ($scope.model.sections.length > 0) {
                while (iterations < 2000) {
                    for (var i = 0; i < $scope.model.sections.length; i++) {
                        var runSection = $scope.model.sections[i];

                        var milesPerSecond = parseFloat(runSection.speed) / 60 / 60;
                        var distanceTraveled = parseFloat((milesPerSecond * parseInt(runSection.durationInSeconds)).toFixed(5));

                        if (distance < distanceTraveled) {
                            var left = distance;
                            timeInSeconds += parseInt(runSection.durationInSeconds * (left / distanceTraveled));
                            distance = 0;
                            break;
                        } else {
                            distance -= distanceTraveled;
                            timeInSeconds += parseInt(runSection.durationInSeconds);
                        }
                    }
                    if (distance <= 0) {
                        break;
                    }
                    iterations++;
                }
            }
            $scope.model.calculated = {
                completedTime: new Date(0, 0, 0, 0, 0, timeInSeconds, 0),
                iterations: iterations,
                averageMileTimeMinutes: (timeInSeconds / 60 / startDistance),
                averageMilePaceMPH: ((60) / (timeInSeconds / 60 / startDistance)),
            };

            var save = '';

            for (var i = 0; i < $scope.model.sections.length; i++) {
                var runSection = $scope.model.sections[i];
                save += runSection.speed + ';';
                save += runSection.durationInSeconds + ';';
            }
            $location.search({
                save: save
            });

        };

        $scope.$watch('model.sections', $scope.model.calculate, true);




        var query = $location.search().save || '';

        if (query.length == 0) {
            $scope.model.addSection();
        } else {
            var qs = query.split(';');
            for (var i = 0; i < qs.length; i += 2) {
                if (qs[i]) {
                    $scope.model.sections.push({
                        durationInSeconds: parseInt(qs[i + 1]),
                        speed: parseFloat(qs[i])
                    });
                }
            }
        }

    }]);
